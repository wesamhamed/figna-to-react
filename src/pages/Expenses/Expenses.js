import { useState } from "react";
import { BarChart, Bar,  ResponsiveContainer, Cell } from 'recharts';
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import optionsIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";
import transportIcon from "../../assets/svg/transportIcon.svg";
import houseIcon from "../../assets/svg/houseIcon.svg";
import boxes from "../../assets/png/boxes.png";
import planet from "../../assets/png/plant.png";
import styles from "./Expenses.module.scss";

const Expenses = () => {
  const [activeIndex,setActiveIndex] =useState(0);
  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "Belanja di pascar",
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "Naik bus umum",
      price: 15.0,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "Bayar Listrik",
      price: 185.75,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "Makan Steak",
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "Nonton Bioskop",
      price: 35.2,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Food and Drinks",
      price: 872.4,
    },
    {
      id: 2,
      category: "Shopping",
      price: 1378.2,
    },
    {
      id: 3,
      category: "Housing",
      price: 928.5,
    },
    {
      id: 4,
      category: "Transportation",
      price: 420.7,
    },
    {
      id: 5,
      category: "Vehicle",
      price: 520,
    },
  ];
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const onMouseOver=(data,index)=>{
    setActiveIndex(index);
  }
  return (
    <>
      <main className={styles.expenses}>
          <div className={styles.expensesCard}>
            <section className={styles.expensesOverview}>
              <div className={styles.expensesHeader}>
                <p className={styles.expensesTitle}>Expenses</p>
                <div className={styles.expensesActions}>
                  <div className={styles.personImages}>
                    <img className={styles.personOne} src={personOne} alt="person one" />
                    <img className={styles.personTwo} src={personTwo} alt="person two" />
                    <img className={styles.personThree} src={personThree} alt="person three" />
                  </div>
                  <button>
                    <img className={styles.addIcon} src={addIcon} alt="add" />
                  </button>
                </div>
              </div>
              <p className={styles.dateRange}>01 - 25 March, 2020</p>
              <ResponsiveContainer width="100%" height="9%">
                <BarChart width={150} height={40} data={data}>
                  <Bar dataKey="uv" 
                      fill="rgba(21, 122, 255,0.2)"
                      onMouseOver={onMouseOver}
                       >
                    {data.map((entry,index)=>(
                      <Cell cursor="pointer" 
                        fill={activeIndex === index ? 
                          "rgb(21, 122, 255)":"rgba(21, 122, 255,0.2)"
                    }/>
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className={styles.expensesOverviewHeader}>
                <p className={styles.expensesOverviewTitle}>Today</p>
                <button>
                  <img src={optionsIcon} alt="options"/>
                </button>
              </div>
              <ul>
                {todayExpenses.map((expense)=>(
                   <li className={styles.expenseItem} key={expense.id}>
                   <div className={styles.expenseItemLeft}>
                     <div style={{backgroundColor:expense.iconBackgroundColor}} className={styles.expenseItemDiv}>
                       <img src={cartIcon} alt={expense.expense}/>
                     </div>
                     <div className={styles.expenseItemDetails}>
                       <p className={styles.expenseItemTitle}>Grocery</p>
                       <p className={styles.expenseItemTime}>{expense.time} •  {expense.location}</p>
                     </div>
                   </div>
                   <p className={styles.expensesItemPrice}>{expense.price.toFixed(2)}</p>
                 </li>
                ))}
              </ul>
              <div className={styles.expensesOverviewHeader}>
                <p className={styles.expensesOverviewTitle}>Monday, 23 March 202</p>
                <button>
                  <img src={optionsIcon} alt="options"/>
                </button>
              </div>
              <ul>
                {previousExpenses.map((expense)=>(
                   <li className={styles.expenseItem} key={expense.id}>
                   <div className={styles.expenseItemLeft}>
                     <div style={{backgroundColor:expense.iconBackgroundColor}} className={styles.expenseItemDiv}>
                       <img src={cartIcon} alt={expense.expense}/>
                     </div>
                     <div className={styles.expenseItemDetails}>
                       <p className={styles.expenseItemTitle}>Grocery</p>
                       <p className={styles.expenseItemTime}>{expense.time} •  {expense.location}</p>
                     </div>
                   </div>
                   <p className={styles.expensesItemPrice}>{expense.price.toFixed(2)}</p>
                 </li>
                ))}
              </ul>
            </section>
            <section className={styles.moneyOverview}>
              <p className={styles.moneyOverviewTitle}>Where your money go?</p>
              <ul>
                {spendCategories.map((category)=>(
                  <li key={category.id}>
                    <div className={styles.spendCategory}>
                      <p className={styles.spendCategoryName}>{category.category}</p>
                      <p className={styles.spendCategoryPrice}>{category.price.toFixed(2)}</p>
                    </div>
                    <div className={styles.spendCategoryBar}>
                      <div style={{width:`${category.price / spendCategories.reduce((acc,current)=>acc+current.price,0) * 100}%`}} className={styles.spendCategoryColoredBar}></div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.saveMoneyDiv}>
                  <img className={styles.boxes} src={boxes} alt="boxes"/>
                  <img className={styles.planet} src={planet} alt="planet"/>
                  <p className={styles.saveMoneyTitle}>Save more money</p>
                  <p className={styles.saveMoneyInfo}>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                  <button type="button" className={styles.saveMoneyButton}>VIEW TIPS</button>
              </div>
            </section>
          </div>
      </main>
    </>
  )
}

export default Expenses;
