import { LayoutWrapper } from "./Layout.element"

const Layout = (props) => {
  return (
    <LayoutWrapper className={props.className} style={props.style}>
      { props.children }
    </LayoutWrapper>
  )
}

export default Layout