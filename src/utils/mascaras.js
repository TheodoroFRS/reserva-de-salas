// Formatar para input
export const formatarData = (data) => {

  // const dataFormat = new Date(data);

  // const options = {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric"
  // }

  // const dataForFormat = dataFormat.toLocaleDateString("pt-br", options);

  // const [dia, mes, ano] = dataForFormat.split("/")

  //return `${ano}-${mes}-${dia}`

  const [ano, mes, dia] = data.split('-');
  const [resto, hora] = data.split('T');

  // return `${dia}/${mes}/${ano} às ${hora} , ${resto}  `
  return data
}



export const formatarDataTime = (data) => {
  const [ano, mes, diaTime] = data.split('-')
  const [dia,hora ] = diaTime.split('T')
  
  return `${dia}/${mes}/${ano}  às ${hora} `
}


