import { makeStyles } from '@material-ui/core'

const ShrinkContainer: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div>{children}</div>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    minWidth: 0,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'row',
  },
})

export default ShrinkContainer
