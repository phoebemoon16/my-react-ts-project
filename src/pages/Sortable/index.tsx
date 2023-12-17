import { useState }  from 'react'

interface ProductType {
  category: string,
  price: string,
  stocked: boolean,
  name: string
}

function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}
function ProductRow({ product }){
  const name: string | Element = product.stocked ? product.name: 
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

function ProjecTable({ products, filterText, inStockOnly }) {
  const rows: [] = []
  let lastCategory: null = null;

  products.forEach(product => {
    // 将name中不含过滤字符的字段 过滤掉
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }
    if(inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
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

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange}) {
  return (
    <form>
      <input type="text" value={filterText} placeholder="Search ..."  onChange={(e) => onFilterTextChange(e.target.value)} ></input>
      <label>
        <input type="checkbox" checked = {inStockOnly}  onChange={(e) => onInStockOnlyChange(e.target.checked)} ></input> 
        only show products in stock
      </label>
    </form>
  )
}

// 过滤组件table
function FilterProductTable({ products }) {

  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInstockOnly] = useState(false)

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInstockOnly}></SearchBar>
      <ProjecTable products={products} filterText={filterText} inStockOnly={inStockOnly}></ProjecTable>
    </div>
  )
}

const PRODUCTS: ProductType[] = [
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
