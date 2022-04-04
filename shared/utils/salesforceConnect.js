// Función Para Conectar con Salesforce

// const sendDataSalesforce = async formValues => {
//   const requestOptions = {
//     method: 'POST',
//     mode: 'no-cors',
//   };

//   const queryString = Object.keys(formValues)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formValues[key])}`)
//     .join('&');

//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_SALESFORCE_WEBTOLEAD}${queryString}`,
//     requestOptions,
//   );

//   return response;
// };

// export default sendDataSalesforce;
