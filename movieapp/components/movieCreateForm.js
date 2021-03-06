import React,{ useState } from "react"

const MovieCreateForm = (props) => {

   const [htmlForm, sethtmlForm] = useState({
     name:'',
     description:'',
     longDesc:'',
     image:'',
     rating:'',
     cover:''
   })

   const handleChange = (event) => {
    const target = event.target
    const name = target.name

    sethtmlForm({
      ...htmlForm,
      [name]: target.value
    })
  }

  const handleGenreChange = (event) => {
   
    const { options } = event.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    sethtmlForm({
      ...htmlForm,
      genre: value.toString()
    })
  }


  const submitForm = () => {
    props.handleFormSubmit({...htmlForm})
  }


    return (
      <form>
        <div className="form-group">
          
          <label htmlFor="name">Name</label>
          <input onChange={handleChange}
          value={htmlForm.name}
          name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input onChange={handleChange}
          value={htmlForm.description}
          name="description" type="text" className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input onChange={handleChange}
          value={htmlForm.rating}
          name="rating" type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" />
          <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input onChange={handleChange}
          value={htmlForm.image}
          name="image" type="text" className="form-control" id="image" placeholder="http://....." />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input onChange={handleChange}
          value={htmlForm.cover}
          name="cover" type="text" className="form-control" id="cover" placeholder="http://......" />
        </div>
        <div className="form-group">
          <label htmlFor="longDesc">Long Description</label>
          <textarea onChange={handleChange}
          value={htmlForm.longDesc}
          name="longDesc" className="form-control" id="longDesc" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select onChange={handleGenreChange} multiple className="form-control" id="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
         
        </div> 
        <button onClick={ submitForm } type="button" className="btn btn-primary">create</button>
      </form>
    )
  }
  
  export default MovieCreateForm