import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {category, imageUrl, appName, appId} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img src={imageUrl} alt={appName} className="app-icon" />
        <p className="app-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
