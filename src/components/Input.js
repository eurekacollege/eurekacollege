import styles from "@/styles/Input.module.sass"
export default function Input({type, value, onChangeInput, placeholder, name, onChangeTextArea, rows}) {
    return (
        <div className={styles.container}>
            {type === "textarea" ? (
				<textarea
					className={styles.textfield}
					value={value}
					rows={rows || 5}
					onChange={onChangeTextArea}
					placeholder={placeholder}
					name={name}
				>
				</textarea>
			) : (
				<input
					className={styles.inputfield}
					type="text"
					value={value}
					onChange={onChangeInput}
					placeholder={placeholder}
					name={name}
				/>
			)}
        </div>
    )
}