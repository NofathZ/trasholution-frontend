import { LayoutWrapper } from "./Layout.element"

const Layout = (props) => {
  return (
    <LayoutWrapper>
      { props.children }
    </LayoutWrapper>
  )
}

export default Layout