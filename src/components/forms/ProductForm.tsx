import { useState } from "react";
// import {
//   PhotoIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/24/outline";
import { InputNumber } from "../inputs/Inputs"
import { TextArea } from "../inputs/TextArea"
import { Select } from "../inputs/Selects"

function ProductForm() {
  const [inputs, setInputs] = useState({});
  // const [images, setImages] = useState<string[]>([]);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [showFullDescription, setShowFullDescription] = useState(false);

  // ------------------------------------------------------------------------
  /* Ya tenemos funcionalidad dinamica para detectar los cambios y reflejarlo en un mismo nivel 
  de arbol para no usar context, obtemos por usar el useState para pasar los datos de un lado 
  a otro por niveles y darle futura vista previa. */

  const handleChanges = (e: any) => {
    const { type, name, value } = e.target;
    const normaliceValue = (type === "number") ? parseFloat(value) : value
    setInputs({ ...inputs, [name]: normaliceValue, });
  }

  console.log(inputs)

  // ------------------------------------------------------------------------

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const newImages = Array.from(e.target.files).map((file) =>
  //       URL.createObjectURL(file)
  //     );
  //     setImages((prevImages) => [...prevImages, ...newImages]);
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const newProduct = {
  //     ...product,
  //     images: images,
  //     price: product.price.toString(),
  //   };
  //   addProduct(newProduct);
  //   // Resetear el formulario
  //   setProduct({
  //     title: "",
  //     description: "",
  //     price: 0,
  //     state: "",
  //     category: "",
  //     freeShipping: "",
  //   });
  //   setImages([]);
  //   setCurrentImageIndex(0);
  // };

  // const toggleDescription = () => {
  //   setShowFullDescription(!showFullDescription);
  // };

  // const nextImage = () => {
  //   // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevImage = () => {
  //   // setCurrentImageIndex(
  //   //   (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   // );
  // };

  return (
    <>
      <div className="w-full bg-white p-4 rounded-lg shadow-md h-auto mt-16 overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-6/12 max-h-[600px] overflow-hidden mb-6 md:mb-0">
            <form
              // onSubmit={handleSubmit}
              className="space-y-4"
            >
              <TextArea labelName="Titulo*" id="title" required={true} event={handleChanges} />
              <TextArea labelName="Descripción*" id="description" required={true} event={handleChanges} />
              <InputNumber labelName="Precio*" id="price" required={true} event={handleChanges} />
              <Select labelName="Categoría" id="category" required={true} event={handleChanges}>
                <option value="">Seleccionar</option>
                <option value="Ropa">Ropa</option>
              </Select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}



export default ProductForm;
