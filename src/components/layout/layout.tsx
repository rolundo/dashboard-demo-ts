import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Header from './header'
import Drawer from './drawer'
import { Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    // backgroundColor: theme.palette.primary.dark,
  },
}))

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const classes = useStyles()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  // // Do not include Header/Drawer wrappers for login page
  // if (router.pathname === '/') {
  //   return <main>{props.children}</main>
  // }

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}
