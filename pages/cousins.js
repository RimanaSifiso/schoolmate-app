import { getCousins } from './api/cousins'

export default ({ cousins }) => {
  return (
    <div className="cousins">
      <h1>List of my cousins</h1>

      {cousins.map((cousin) => (
        <h2>{cousin}</h2>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await getCousins()

  return {
    props: { cousins: JSON.parse(JSON.stringify(data)) },
  }
}
