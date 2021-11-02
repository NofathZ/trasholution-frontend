import { LayoutFixedWrapper } from "./Layout.element"

const LayoutFixed = (props) => {
  return (
    <LayoutFixedWrapper>
      { props.children }
    </LayoutFixedWrapper>
  )
}

export default LayoutFixed