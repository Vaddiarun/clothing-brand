export const DetailsPage = () => {
    const data = JSON.parse(localStorage.getItem("item"));
  
    if (!data) {
      return <h2>No item details found!</h2>;
    }
  
    return (
      <div style={styles.pageContainer}>
        <div style={styles.contentContainer}>
          <img src={data.imageUrl} alt={data.category} style={styles.image} />
        </div>
      </div>
    );
  };
  
  // Inline styles with responsive design
  const styles = {
    pageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh", // Ensures at least full viewport height
      backgroundColor: "#f8f9fa",
      paddingTop: "80px", // Adjust for navbar height
      padding: "20px",
    },
    contentContainer: {
      maxWidth: "1200px",
      width: "100%",
    },
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      marginBottom: "20px",
      borderRadius: "8px",
    },
  };
  