import styles from "./SizePicker.module.css";

export default function SizePicker({ sizes = [], value, onChange }) {
  return (
    <div className={styles.row} role="radiogroup" aria-label="Select size">
      {sizes.map(({ code, stock }) => {
        const selected = value === code;
        const disabled = stock <= 0;
        return (
          <button
            key={code}
            type="button"
            className={[
              styles.pill,
              selected ? styles.selected : "",
              disabled ? styles.disabled : "",
            ].join(" ")}
            onClick={() => !disabled && onChange(code)}
            aria-pressed={selected}
            disabled={disabled}
            title={disabled ? `${code} sold out` : `Select ${code}`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
