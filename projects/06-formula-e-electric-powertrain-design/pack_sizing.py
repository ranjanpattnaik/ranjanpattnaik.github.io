"""First-order battery pack sizing for a Formula E Gen3-class rear motor.

Reproduces the analytical sizing used before the Multisim model.
Run:  python pack_sizing.py
"""
import math

P_PEAK = 350e3        # W, rear motor peak power
V_SYS = 900.0         # V, target nominal system voltage (design brief)
E_TARGET = 50e3       # Wh, target energy storage
V_CELL = 3.7          # V, Li-ion NMC nominal
Q_CELL = 5.0          # Ah  (LG INR21700-M50T class cell)
R_CELL = 0.010        # ohm, assumed internal resistance per cell
I_CELL_MAX = 35.0     # A, cell continuous discharge limit (datasheet class)

n_series = round(V_SYS / V_CELL)   # 243 cells -> 899.1 V nominal
e_string = n_series * V_CELL * Q_CELL
n_parallel = math.ceil(E_TARGET / e_string)
cells = n_series * n_parallel
i_pack = P_PEAK / V_SYS
i_string = i_pack / n_parallel
r_pack = R_CELL * n_series / n_parallel
v_drop = i_pack * r_pack

print(f"Series cells        : {n_series}  ({V_SYS / V_CELL:.1f} exact)")
print(f"Energy per string   : {e_string:.1f} Wh")
print(f"Parallel strings    : {n_parallel}  ({E_TARGET / e_string:.2f} exact -> installed {cells * V_CELL * Q_CELL / 1e3:.1f} kWh)")
print(f"Total cells         : {cells}")
print(f"Pack capacity       : {n_parallel * Q_CELL:.0f} Ah")
print(f"Peak pack current   : {i_pack:.0f} A  -> {i_string:.1f} A per string (cell limit {I_CELL_MAX:.0f} A, margin {I_CELL_MAX / i_string:.2f}x)")
print(f"Pack resistance     : {r_pack:.4f} ohm")
print(f"Voltage sag at peak : {v_drop:.1f} V  -> {V_SYS - v_drop:.1f} V under load")
print(f"I^2R loss at peak   : {i_pack**2 * r_pack / 1e3:.1f} kW")
print(f"Regen voltage ceiling (80% of nominal, report safety margin): {0.8 * V_SYS:.0f} V")
