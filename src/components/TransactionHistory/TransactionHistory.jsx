import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
<table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(({id, type, amount, currency})=>(
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.number.isRequired,
        currency:PropTypes.string.isRequired,
    })
}