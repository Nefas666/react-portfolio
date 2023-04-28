import React from "react"
import styled from "styled-components"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"

const SectionCellGroup = styled.div`
  margin: -1px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  background: linear-gradient(180deg, rgba(163,120,217,0) 0%, rgba(163,120,217,0.25) 100%);

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SectionCellTitle = styled.h3`
  font-weight: 700;
  background: rgb(26, 3, 42);
  background: linear-gradient(
    90deg,
    rgba(26, 3, 42, 0.9346113445378151) 0%,
    rgba(26, 3, 42, 0.6993172268907564) 50%,
    rgba(26, 3, 42, 0.39119397759103647) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: rgba(51, 51, 51, 0.838);
  font-size: 50px;
  text-align:center;
  @media (max-width: 800px) {
    font-size: 44px;
  }
`
const SectionCellTitleContainer = styled.div`
  display:flex;
  padding:20px 0;
  align-items:center;
  justify-content:center;
  background: rgb(163,120,217);
  background: linear-gradient(0deg, rgba(163,120,217,0) 0%, rgba(163,120,217,0.25) 100%);
  margin:-1px 0 0 0;
`

const Tools = props => (
  <div id="tools">
     <SectionCellTitleContainer>
        <SectionCellTitle>Most of the time I operate on frontend libraries to accomplish my tasks but I'm always thrilled when I can challenge myself in delving into backend environments and using REST API's </SectionCellTitle>
        </SectionCellTitleContainer>
      <SectionCellGroup>
        
        {staticdata.cells.map(cell => (
          <Cell
            title={cell.title}
            description={cell.description}
            image={cell.image}
          />
        ))}
      </SectionCellGroup>
  </div>
)

export default Tools
