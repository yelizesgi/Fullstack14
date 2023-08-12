import React from 'react'
import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style'
import { useBooksContext } from '../../context/BooksContext'

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const {searchInfo, setSearchInfo, getData}= useBooksContext()

  const handleChange = ()=>{
    console.log(e.target)
    console.log(e.target.name)
    console.log({[e.target.name]: e.target.value})
    setSearchInfo({...searchInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = ()=>{
    e.preventDefault();
    getData()
  }
  console.log(searchInfo)
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZİNES</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput type='search' placeholder='Search...' value={searchInfo.query} name='query'onChange={handleChange} required/>
        <SelectBox value={searchInfo.selectType} onChange={handleChange} name='selectType'>
          <option>All</option>
          {printType.map(item=> <option key={item} value={item}>{item}</option>)}
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header