
function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}
function ProductRow({product}){
  const name = product.stocked ? product.name: 
  <span style={{ color: 'red' }}>
  {product.name}
</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProjecTable({ products }) {
  const rows = []
  let lastCategory = null;

  products.forEach(product:any => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        category={product}
        key={product.name} />
    );
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search ..."></input>
      <label>
        <input type="checkbox"></input> only show products in stock
      </label>
    </form>
  )
}

// 过滤组件table
function FilterProductTable({ products }) {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProjecTable products={products}></ProjecTable>
    </div>
  )
}
const PRODUCTS: any = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

export default function Mainsort() {
  return <FilterProductTable products={PRODUCTS}></FilterProductTable>
}
