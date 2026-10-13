export default function PricingTable({ id, title, treatments }) {
  return <section className="pricing-financing__section pricing-financing__comparison" aria-labelledby={id}>
    <div className="pricing-financing__container">
      <h2 className="pricing-financing__table-title" id={id}>{title}</h2>
      <div className="pricing-financing__table-scroll" role="region" aria-labelledby={id} tabIndex={0}>
        <table className="pricing-financing__table">
          <thead><tr><th scope="col">Treatment</th><th scope="col">Design</th><th scope="col">Price Range</th></tr></thead>
          <tbody>{treatments.map(({ name, image, alt, price }) => <tr key={name}>
            <th scope="row">{name}</th>
            <td data-label="Design"><div className={`pricing-financing__design${id === 'pricing-implants-title' ? ' pricing-financing__design--implant' : ''}`}><img src={image} alt={alt} loading="lazy" /></div></td>
            <td data-label="Price Range">{price}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </div>
  </section>
}
