"""The Deer at Dusk — make the AI judge feel brave (resubmit).

Writes one short poem to /output/entry.txt.
Pure Python stdlib, deterministic, no network.
"""

import os

POEM = (
    "The deer steps out of the trees.\n"
    "The boy stands in the dry grass.\n"
    "Cold air on his face.\n"
    "He does not move.\n"
    "He does not reach.\n"
    "The deer watches him.\n"
    "One dark eye, slow breath.\n"
    "The light goes gold over the field.\n"
    "The deer lowers its head\n"
    "and grazes beside him."
)


def main() -> None:
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, "entry.txt")
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(POEM)
    print(f"wrote {path}: {len(POEM)} code points")


if __name__ == "__main__":
    main()
