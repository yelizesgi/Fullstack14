import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Modal from "@mui/material/Modal"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import { modalStyle } from "../styles/globalStyles"
import useStockCall from "../hooks/useStockCall"
import { useSelector } from "react-redux"

export default function ProductModal({ open, handleClose }) {
  const { postStockData } = useStockCall()
  const { categories } = useSelector((state) => state.stock)

  const [info, setInfo] = useState({ name: "", category_id: "", brand_id: "" })

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(info.id)
    postStockData("products", info)
    handleClose()
    setInfo({ name: "", category_id: "", brand_id: "" })
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {handleClose()
            setInfo=({ name: "", category_id: "", brand_id: "" })
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="category"
                id="categories"
                name="category_id"
                value={info?.category_id || ""}
                label="category"
                onChange={handleChange}
              >
                {categories?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brand">Brandss</InputLabel>
              <Select
                labelId="brand"
                id="brand"
                name="category_id"
                value={info?.brand_id || ""}
                label="category"
                onChange={handleChange}
              >
                {brands?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name}
              required
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
