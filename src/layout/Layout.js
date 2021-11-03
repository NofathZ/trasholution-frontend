import { LayoutWrapper } from "./Layout.element"

const Layout = (props) => {
  return (
    <LayoutWrapper className={props.className}>
      { props.children }
    </LayoutWrapper>
  )
}

export default Layout