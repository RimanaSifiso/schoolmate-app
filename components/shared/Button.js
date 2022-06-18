export default function Button({ text, type, action }) {
  return (
    <button className={type} onClick={action}>
      {text}
    </button>
  )
}
