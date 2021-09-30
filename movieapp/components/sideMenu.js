import React from "react";
import { createMovie } from "../action";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";



const SideMenu = (props) => {
  const { categories } = props
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      // Close modal after create
      console.log(JSON.stringify(movies))
      modal.closeModal()
    })
  }


  return (
    <div>
      <Modal  ref={ele => modal = ele} hasSubmit={false}> 
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
        </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
      { categories.map(c =>
            <a
              key={c.id}
              href="#"
              className="list-group-item">{c.name}</a>
          )
        }
        
      
      </div>
    </div>
  );
};

export default SideMenu;
