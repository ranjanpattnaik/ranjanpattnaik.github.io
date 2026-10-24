"""Stress-life (S-N) prediction of the four-point-bend fatigue beams (AA6082-T6).

Reproduces the hand calculation from the lab report:
  1. Ultimate tensile strength from the dog-bone tensile test
  2. Endurance-modified alternating strengths at 1e3 and 1e8 cycles (Goodman mean-stress correction)
  3. Basquin S-N equation  Sa = a * N^b
  4. Machine load needed for failure at 1e5 cycles, compared with the test result
Run:  python sn_prediction.py
"""
import math

# --- Tensile test --------------------------------------------------------------
F_PEAK = 25866.4                 # N, dog-bone peak load
AREA = 8.04 * 9.57               # mm^2
SU = F_PEAK / AREA               # MPa
SU_R = 336.0                     # value carried through the report (rounded)

LEVER = 0.035                    # m, four-point-bend moment arm
M_MIN = 3.5                      # N·m, moment from the 200 N machine pre-load
N_TARGET = 1e5


def goodman_sa(sao, sigma_min, su=SU_R):
    """Solve Sa = Sao' * (1 - (Sa + sigma_min)/Su) for Sa (mean = Sa + sigma_min)."""
    return sao * (1 - sigma_min / su) / (1 + sao / su)


def beam(name, b_mm, d_mm, Cs_1e8, Kf):
    b, d = b_mm / 1e3, d_mm / 1e3
    I = b * d**3 / 12
    y = d / 2
    sigma_min = M_MIN / I * y / 1e6                              # MPa
    Cd = 0.61 * d**-0.097                                        # size factor (d in m)
    sa3 = goodman_sa(0.9 * SU_R, sigma_min)                      # 1e3 cycles, all factors = 1
    sa8 = goodman_sa(0.4 * SU_R * Cd * Cs_1e8 / Kf, sigma_min)   # 1e8 cycles
    e = 8
    bexp = -1 / (e - 3) * math.log10(sa3 / sa8)
    a = (sa3**e / sa8**3) ** (1 / (e - 3))
    sa5 = a * N_TARGET**bexp
    Ma = sa5 * 1e6 * I / y
    Fa = Ma / LEVER
    F_machine = 4 * Fa + 200
    print(f"\n{name}")
    print(f"  I = {I:.3e} m^4, sigma_min = {sigma_min:.2f} MPa, Cd = {Cd:.3f}, Kf = {Kf:.3f}")
    print(f"  Sa(1e3) = {sa3:.2f} MPa, Sa(1e8) = {sa8:.2f} MPa")
    print(f"  S-N: Sa = {a:.1f} * N^({bexp:.4f})")
    print(f"  Sa(1e5) = {sa5:.1f} MPa -> Ma = {Ma:.2f} N·m -> Fa = {Fa/1e3:.3f} kN")
    print(f"  Predicted max machine load for 1e5 cycles = {F_machine/1e3:.2f} kN")
    return F_machine / 1e3


if __name__ == "__main__":
    print(f"UTS from tensile test = {SU:.1f} MPa")
    # Notched beam: Kt from Peterson-type fit, notch sensitivity q = 0.9
    r = 0.567
    Kt = 3 - 3.13 * r + 3.66 * r**2 - 1.53 * r**3
    Kf = 1 + 0.9 * (Kt - 1)
    p_plain = beam("Plain beam", 9.55, 15.93, Cs_1e8=0.8, Kf=1.0)
    p_hole = beam("Beam with hole", 9.75, 16.01, Cs_1e8=0.7, Kf=Kf)
    print("\nTest results (group 2a):")
    print(f"  Plain beam : tested at 5.44 kN max -> failed at 724,992 cycles (prediction {p_plain:.2f} kN for 1e5)")
    print(f"  Beam w/hole: tested at 4.80 kN max -> 96,320 cycles, no fracture (prediction {p_hole:.2f} kN for 1e5)")
