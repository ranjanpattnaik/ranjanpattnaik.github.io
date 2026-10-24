"""Re-plot the GT-Power intake-manifold results and build a flap switching map.

Data: ../data/ve_torque_vs_speed.csv (exported from the GT-Post results used in the report).
Run:  python plot_intake_results.py   ->  writes PNGs to ../images/
"""
from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd

HERE = Path(__file__).resolve().parent
DATA = HERE.parent / "data" / "ve_torque_vs_speed.csv"
OUT = HERE.parent / "images"

CASES = {  # flap A / flap B state -> label, colour, marker
    "AOBO": ("A open, B open", "#2a78d6", "o"),
    "AOBC": ("A open, B closed", "#eb6834", "s"),
    "ACBO": ("A closed, B open", "#1baf7a", "^"),
    "ACBC": ("A closed, B closed", "#eda100", "D"),
}

plt.rcParams.update({
    "font.size": 10, "axes.spines.top": False, "axes.spines.right": False,
    "axes.edgecolor": "#8a8a85", "axes.grid": True, "grid.color": "#e4e3de",
    "grid.linewidth": 0.6, "axes.titleweight": "bold", "axes.titlesize": 11,
})


def line_plot(df, prefix, ylabel, title, fname, scale=1.0):
    fig, ax = plt.subplots(figsize=(8, 4.5), dpi=150)
    for key, (label, colour, marker) in CASES.items():
        y = df[f"{prefix}_{key}"] * scale
        ax.plot(df.engine_speed_rpm, y, color=colour, lw=2, marker=marker, ms=4, label=label)
        i = y.idxmax()
        ax.annotate(f"{y[i]:.1f} @ {df.engine_speed_rpm[i]:.0f}", (df.engine_speed_rpm[i], y[i]),
                    textcoords="offset points", xytext=(-26, -14) if key == "AOBC" else (0, 7), ha="center", fontsize=8, color="#3d3d3a")
    ax.set_xlabel("Engine speed (rpm)")
    ax.set_ylabel(ylabel)
    ax.set_title(title, loc="left")
    ax.legend(frameon=False, ncol=2, loc="lower center")
    fig.tight_layout()
    fig.savefig(OUT / fname)
    plt.close(fig)


def switching_map(df):
    """For each speed, which flap state gives the highest volumetric efficiency."""
    ve = df[[f"ve_{k}" for k in CASES]]
    best = ve.idxmax(axis=1).str.replace("ve_", "")
    env = ve.max(axis=1) * 100
    fig, ax = plt.subplots(figsize=(8, 4.5), dpi=150)
    for key, (label, colour, marker) in CASES.items():
        ax.plot(df.engine_speed_rpm, df[f"ve_{key}"] * 100, color=colour, lw=1, alpha=0.35)
    for key, (label, colour, marker) in CASES.items():
        m = best == key
        if m.any():
            ax.scatter(df.engine_speed_rpm[m], env[m], color=colour, marker=marker, s=40,
                       edgecolor="white", linewidth=1, zorder=3, label=f"Best: {label}")
    ax.plot(df.engine_speed_rpm, env, color="#3d3d3a", lw=2, zorder=2, label="Best-of envelope")
    ax.set_xlabel("Engine speed (rpm)")
    ax.set_ylabel("Volumetric efficiency (%)")
    ax.set_title("Flap switching map: best configuration at each speed", loc="left")
    ax.legend(frameon=False, fontsize=8, loc="lower right")
    fig.tight_layout()
    fig.savefig(OUT / "flap-switching-map.png")
    plt.close(fig)
    return best, env


if __name__ == "__main__":
    df = pd.read_csv(DATA).sort_values("engine_speed_rpm").reset_index(drop=True)
    line_plot(df, "ve", "Volumetric efficiency (%)", "Volumetric efficiency vs engine speed",
              "volumetric-efficiency-vs-speed.png", scale=100)
    line_plot(df, "torque_Nm", "Brake torque (N·m)", "Torque vs engine speed", "torque-vs-speed.png")
    best, env = switching_map(df)
    print(pd.DataFrame({"rpm": df.engine_speed_rpm, "best_config": best, "VE_%": env.round(1)}).to_string(index=False))
