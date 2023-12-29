import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
const ExpenseList = ({ handleDelete, initialExpenses }) => {
  return (
    <>
      <ul className='list'>
        {/* {Expense Item} */}
        {initialExpenses.map(expense => {
          return (
              <ExpenseItem
                  expense={expense}
                  key={expense.id}
                  handleDelete={handleDelete}
              />
          )
        })}
      </ul>
      <button className='btn'>목록 지우기<MdDelete/></button>
    </>
  )
}

export default ExpenseList