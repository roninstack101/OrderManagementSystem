import BackgroundContainer from "./backgroundContainer";

const styles = {
  baseContainer: {
    position: "relative", // important for absolute children
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // center horizontally
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
  },

  blueContainer: {
    backgroundColor: "blue",
    height: "200px",
    width: "100%",
    borderRadius: '0 0 40px 40px'
   
  },

  imageBox: {
    position: "absolute",
    top: "115px", // overlaps both sections
    width: "150px",
    height: "150px",
    backgroundColor: "#ccc",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid white",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },

  whiteContainer: {
    backgroundColor: "white",
    paddingTop: "60px", // gives room for overlap
    padding: "1rem",
    width: "100%",
    boxSizing: 'borderBox',
    
    
    
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
    resize: "vertical",
  },
};

export default function Profile() {
  return (
    <div style={styles.baseContainer}>
      <div style={styles.blueContainer}></div>

      <div style={styles.imageBox}>
        <img
          src="https://www.wholeheartedeats.com/wp-content/uploads/2023/12/Baked-Samosas.jpg"
          alt="profile"
          style={styles.img}
        />
      </div>

      <div style={styles.whiteContainer}>
         <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Product Name"
              value={'formData.name'}
              onChange={'handleChange'}
              required
            />

            <textarea
              style={styles.textarea}
              // style={modalStyle.input}
              type="text"
              name="category"
              placeholder="Description"
              rows="3"
              value={'formData.category'}
              onChange={'handleChange'}
              required
            />

            <input
              style={styles.input}
              type="number"
              name="price"
              placeholder="Price"
              value={styles.price}
              onChange={'handleChange'}
              min="0"
              required
            />
      </div>
    </div>
  );
}
