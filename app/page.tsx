
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherinen Johnson" ></img>
}

export default function Gallery () {
  return(
    <div>
      <h1>Amazing Nono</h1>
      <br></br>
      <div className="flex">
      <Profile />
       <Profile />
        <Profile />
         <Profile />
      </div>
    </div>
  )
}
