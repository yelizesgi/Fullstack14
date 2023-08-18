import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PaymentsIcon from "@mui/icons-material/Payments"
import { deepPurple, pink, amber } from "@mui/material/colors"
import { Paper, Grid, Avatar } from "@mui/material"
import { useSelector } from "react-redux"
const KpiCards = () => {
  const {sales, purchases} = useSelector((state)=> state.stock)

  const totalSales = sales?.map((item) =>Number(item.price_total)).reduce((acc, sale) => acc + sale, 0)

  const totalPurchases = purchases?.map((item) =>Number(item.price_total)).reduce((acc, sale) => acc + sale, 0)

  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon />,
      bgColor: deepPurple[100],
      color: deepPurple[700],
      title: "sales",
      value: `$${totalSales}`,
    },
    {
      id: 2,
      icon: <ShoppingCartIcon />,
      bgColor: pink[100],
      color: pink[700],
      title: "profit",
      value: `$${totalSales - totalPurchases}`,
    },
    {
      id: 3,
      icon: <PaymentsIcon />,
      bgColor: amber[100],
      color: amber[700],
      title: "purchases",
      value: `$${totalPurchases}`,
    },
  ]

  return (
    <div>
      <Grid container>
        {cardData.map((item) => (
          <Grid item key={item.id}>
            <Paper>
              <Avatar
                sx={{
                  bgcolor: item.bgColor,
                  color: item.color,
                  width: 70,
                  height: 70,
                }}
              >
                {item.icon}
              </Avatar>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default KpiCards
