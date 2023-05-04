import React from "react";
import "./ProductDescription.scss";

const ProductDescription = () => {
  return (
    <div className="productDescription">
      <button></button>
      {detailInfo.map(data => (
        <div className="descriptionBox" key={data.id}>
          <h2>{data.title}</h2>
          <p className="artistName">{data.artistName}</p>
          <p className="productsSize">
            {data.productsSizeLeft} × {data.productsSizeRight}cm
          </p>
          <p className="material">{data.material}</p>
          <p className="description">{data.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductDescription;

const detailInfo = [
  {
    id: 1,
    title: "What a Delight 2023",
    artistName: "HaeChan, USA, 1990",
    productsSizeLeft: 100,
    productsSizeRight: 80,
    material: "Acrylic on the Canvas",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique vulputate ex auctor consequat. Vestibulum eu euismod leo. Maecenas ante lectus, lobortis in nisi ac, porttitor dapibus urna. Morbi mattis lobortis ligula gravida finibus. Aliquam fermentum posuere ligula, ut mollis nunc blandit eu. Curabitur commodo massa diam, eget molestie lectus luctus a. Donec non quam quis enim eleifend hendrerit. Donec non felis tellus. Ut varius mi tellus, eu pellentesque dui interdum id. Etiam mauris justo, elementum non leo ut, consequat dapibus enim. Aenean rhoncus urna nec tortor aliquet, non tempus ante consequat. Ut placerat convallis ultrices. Curabitur id ligula nibh. Donec ultricies est orci, vehicula posuere erat dictum a. Sed eu molestie sapien, sed consequat nisl. Proin vel tincidunt ligula. Pellentesque non auctor neque. Curabitur vitae odio nulla. Quisque aliquet diam sit amet ligula condimentum, ut volutpat justo molestie. Donec nibh mi, tempor ac iaculis et, hendrerit nec purus. Nunc commodo arcu sit amet pellentesque suscipit. Integer placerat diam in iaculis auctor. Aliquam pellentesque porttitor diam eget vestibulum. Integer vehicula varius sem, vitae laoreet nibh.",
    price: "$2500",
    count: 1,
    quantity: 5,
  },
];
