import { LayoutFixedWrapper } from "./Layout.element"

const LayoutFixed = (props) => {
  return (
    <LayoutFixedWrapper className={props.className}>
      { props.children }
    </LayoutFixedWrapper>
  )
}

export default LayoutFixed