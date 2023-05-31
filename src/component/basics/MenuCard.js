import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;   // this is called destructuring a object so that we dont have to write curElem.id and so on 
          return (
            <>
              <div>
                <div className="card-container" key={id}>
                  <div className="card">
                    <div classsName="card-body">
                      <span className="card-number card-circle subtle">
                        {id}
                      </span>
                      <span className="card-author subtle">{category}</span>
                      <h1 className="card-title">{name}</h1>
                      <span className="card-description subtle">
                        {description}
                      </span>
                      <div className="card-read">Read</div>
                      <div>
                        <img src={image} alt="images" className="card-media" />
                        <span className="card-tag subtle">Order Now </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
