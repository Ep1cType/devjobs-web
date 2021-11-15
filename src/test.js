let data = [
  {
    id: 1,
    name: "Denis",
    city: "Krasnoyarsk"
  },
  {
    id: 2,
    name: "Vanya",
    city: "Bratsk",
  }
]


function search(value) {
  let searchValue = value.toLowerCase().trim()
  console.log(searchValue)
  // data = {...data, }
  console.log(data.filter((company) => company.city.toLowerCase().includes(searchValue) && company.name.toLowerCase().includes(searchValue)))
  // return data.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()))
  const filteredCompanyList = data.filter((company) => {
    return Object.keys(company).some((key) => ['name', 'city'].includes(key) ? company[key].toString().toLowerCase().includes(searchValue) : false)
  })


  console.log(filteredCompanyList);

}

search("a")

