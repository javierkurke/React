
const Saludo = ({name,lasname, fn, children}) => {
  if (fn) {
    fn()
  }
  
  return (
    <>
    <h1>Saludo a {name} {lasname} !</h1>
    {children}
    
    </>
    
  )
}

export default Saludo