import styled from "styled-components"

const StyledTable = styled.table`
    border: none;
    border-collapse: collapse;
    width: 100%;
    box-shadow: 0 2px 10px rgb(255 255 255 / 20%);
    margin-top: 5px;
    margin-bottom: 5px;
`

const StyledTableCell = styled.td`
    border: 1px solid rgb(255 255 255 / 20%);
    text-align: center;
    padding: 15px;
    min-width: 100px;
    max-width: calc(100% / 3) !important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const StyledTableHeader = styled.thead`
    background-color: black;
    color: white;
`

function Home() {

  const Pokedex = require("pokeapi-js-wrapper")
  const P = new Pokedex.Pokedex()
  // const [pokemon]

  return (
    <div>
    <StyledTable>
      <StyledTableHeader>
        <tr>
          <StyledTableCell>#</StyledTableCell><StyledTableCell>Name</StyledTableCell><StyledTableCell>Image</StyledTableCell><StyledTableCell>Type</StyledTableCell>
        </tr>
      </StyledTableHeader>

      <tbody>
        {}
      </tbody>
    </StyledTable>
    
    
    </div>
  )
}

export default Home;