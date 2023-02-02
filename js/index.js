const signUp = document.getElementById("signUp"); // get the signUp section
let form = document.getElementById("signUpInfos"); // get the signUpInfos section (to put the tables in)
const company = document.getElementById("typeOfCompany"); // get the button of company
const person = document.getElementById("typeOfPerson"); // get the butotn of person
let registerOption = 0; // 1 = person /// 2 = company
let howManyRegistered = 0;

// creating the labels
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

// creating the inputs
function createInput(id, value, name, type = "text") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.required = true; // isn't working yet
  return input;
}

// event when you press the person button
person.addEventListener("click", function (ev) {
  //creating the fullname
  const fullnameLabel = createLabel("Nome completo: ", "fullname");
  const fullnameInput = createInput("fullname", null, "fullname");

  //creating the cpf
  const cpfLabel = createLabel("CPF: ", "cpf");
  const cpfInput = createInput("cpf", null, "cpf");

  //creating the gender
  const genderLabel = createLabel("Sexo: ", "sexo");
  const genderSelect = document.createElement("select");
  genderSelect.id = "gender";
  genderSelect.name = "gender";
  genderSelect.options[genderSelect.options.length] = new Option(
    "Masculino",
    "Masculino"
  );
  genderSelect.options[genderSelect.options.length] = new Option(
    "Feminino",
    "Feminino"
  );
  genderSelect.options[genderSelect.options.length] = new Option(
    "Transgênero",
    "Transgênero"
  );
  genderSelect.options[genderSelect.options.length] = new Option(
    "Outro",
    "Outro"
  );
  genderSelect.options[genderSelect.options.length] = new Option(
    "Prefiro não infomar",
    "Prefiro não infomar"
  );

  //creating the birthdate
  const birthDateLabel = createLabel("Data de Nascimento: ", "birthDate");
  const birthDateInput = createInput("birthDate", null, "birthDate", "date");

  //creating the address labels
  const personalStreetLabel = createLabel("Rua: ", "street");
  const personalStreetInput = createInput("street", null, "street");
  const personalHouseNumberLabel = createLabel("Nº: ", "houseNumber");
  const personalHouseNumberInput = createInput("number", null, "number");
  const personalDistrictLabel = createLabel("Bairro: ", "district");
  const personalDistrictInput = createInput("district", null, "district");
  const personalZipCodeLabel = createLabel("CEP: ", "zipCode");
  const personalZipCodeInput = createInput("zipCode", null, "zipCode");
  const personalCityLabel = createLabel("Cidade: ", "city");
  const personalCityInput = createInput("city", null, "city");
  const personalStateLabel = createLabel("Estado: ", "state");
  const personalStateInput = createInput("state", null, "state");

  //creating the email
  const personalEmailLabel = createLabel("E-mail: ", "email");
  const personalEmailInput = createInput("email", null, "email");

  //creating the phone
  const personalPhoneLabel = createLabel("Celular: ", "phone");
  const personalPhoneInput = createInput("phone", null, "phone");

  //creating the service
  const personalServiceLabel = createLabel("Serviço prestado: ", "service");
  const personalServiceInput = createInput("service", null, "service");

  //creating the service description
  const personalDescription = document.createElement("textarea");
  personalDescription.id = "description";
  personalDescription.placeholder = "Digite aqui a descrição do seu serviço...";
  personalDescription.className = "textareaClass";

  form.remove(); // removing the old form on it
  const newForm = document.createElement("form"); // creating the new form
  newForm.id = "signUpInfos"; // giving the same id before
  form = newForm; // giving the newForm again to the form variable
  signUp.appendChild(form); // appending the new form

  // creating divs (to better css)

  const fullnameDiv = document.createElement("div");
  fullnameDiv.className = "fullnameClass";
  fullnameDiv.append(fullnameLabel, fullnameInput);

  const cpfDiv = document.createElement("div");
  cpfDiv.className = "cpfClass";
  cpfDiv.append(cpfLabel, cpfInput);

  const genderDiv = document.createElement("div");
  genderDiv.className = "genderClass";
  genderDiv.append(genderLabel, genderSelect);

  const birthDateDiv = document.createElement("div");
  birthDateDiv.className = "birthDateClass";
  birthDateDiv.append(birthDateLabel, birthDateInput);

  const personalStreetDiv = document.createElement("div");
  personalStreetDiv.className = "personalStreetClass";
  personalStreetDiv.append(personalStreetLabel, personalStreetInput);

  const personalHouseNumberDiv = document.createElement("div");
  personalHouseNumberDiv.className = "personalHouseNumberClass";
  personalHouseNumberDiv.append(
    personalHouseNumberLabel,
    personalHouseNumberInput
  );

  const personalDistrictDiv = document.createElement("div");
  personalDistrictDiv.className = "personalDistrictClass";
  personalDistrictDiv.append(personalDistrictLabel, personalDistrictInput);

  const personalZipCodeDiv = document.createElement("div");
  personalZipCodeDiv.className = "personalZipCodeClass";
  personalZipCodeDiv.append(personalZipCodeLabel, personalZipCodeInput);

  const personalCityDiv = document.createElement("div");
  personalCityDiv.className = "personalCityClass";
  personalCityDiv.append(personalCityLabel, personalCityInput);

  const personalStateDiv = document.createElement("div");
  personalStateDiv.className = "personalStateClass";
  personalStateDiv.append(personalStateLabel, personalStateInput);

  const personalEmailDiv = document.createElement("div");
  personalEmailDiv.className = "personalEmailClass";
  personalEmailDiv.append(personalEmailLabel, personalEmailInput);

  const personalPhoneDiv = document.createElement("div");
  personalPhoneDiv.className = "personalPhoneClass";
  personalPhoneDiv.append(personalPhoneLabel, personalPhoneInput);

  const personalServiceDiv = document.createElement("div");
  personalServiceDiv.className = "personalServiceClass";
  personalServiceDiv.append(personalServiceLabel, personalServiceInput);

  const personalDescriptionDiv = document.createElement("div");
  personalDescriptionDiv.className = "personalDescriptionClass";
  personalDescriptionDiv.append(personalDescription);

  // append all divs in the table
  form.append(
    fullnameDiv,
    cpfDiv,
    genderDiv,
    birthDateDiv,
    personalStreetDiv,
    personalHouseNumberDiv,
    personalDistrictDiv,
    personalZipCodeDiv,
    personalCityDiv,
    personalStateDiv,
    personalEmailDiv,
    personalPhoneDiv,
    personalServiceDiv,
    personalDescriptionDiv
  );
  registerOption = 1; // gave the 1 (person) option to know what is the type os register
});

company.addEventListener("click", function (ev) {
  // creating the companyName
  const fullCompanyNameLabel = createLabel(
    "Nome da Empresa: ",
    "fullCompanyName"
  );
  const fullCompanyNameInput = createInput(
    "fullCompanyName",
    null,
    "fullCompanyName"
  );

  // creating the cnpj
  const cnpjLabel = createLabel("CNPJ: ", "cnpj");
  const cnpjInput = createInput("cnpj", null, "cnpj");

  // creating the addres
  const companyStreetLabel = createLabel("Rua: ", "street");
  const companyStreetInput = createInput("street", null, "street");
  const companyNumberLabel = createLabel("Nº: ", "houseNumber");
  const companyNumberInput = createInput("number", null, "number");
  const companyDistrictLabel = createLabel("Bairro: ", "district");
  const companyDistrictInput = createInput("district", null, "district");
  const companyZipCodeLabel = createLabel("CEP: ", "zipCode");
  const companyZipCodeInput = createInput("zipCode", null, "zipCode");
  const companyCityLabel = createLabel("Cidade: ", "city");
  const companyCityInput = createInput("city", null, "city");
  const companyStateLabel = createLabel("Estado: ", "state");
  const companyStateInput = createInput("state", null, "state");

  // creating the email
  const companyEmailLabel = createLabel("E-mail: ", "email");
  const companyEmailInput = createInput("email", null, "email");

  // creating the phone
  const companyPhoneLabel = createLabel("Celular: ", "phone");
  const companyPhoneInput = createInput("phone", null, "phone");

  // creating the service
  const companyServiceLabel = createLabel("Serviço prestado: ", "service");
  const companyServiceInput = createInput("service", null, "service");

  // creating the service description
  const companyDescription = document.createElement("textarea");
  companyDescription.id = "description";
  companyDescription.placeholder = "Digite aqui a descrição do seu serviço...";

  form.remove(); // removing the old form
  const newForm = document.createElement("form"); // creating the new form
  newForm.id = "signUpInfos"; // giving the same id he had before
  form = newForm; // put the new form on the form variable
  signUp.appendChild(form); // appending the new form

  // creating the divs

  const fullCompanyNameDiv = document.createElement("div");
  fullCompanyNameDiv.className = "fullCompanyNameClass";
  fullCompanyNameDiv.append(fullCompanyNameLabel, fullCompanyNameInput);

  const cnpjDiv = document.createElement("div");
  cnpjDiv.className = "cnpjClass";
  cnpjDiv.append(cnpjLabel, cnpjInput);

  const companyStreetDiv = document.createElement("div");
  companyStreetDiv.className = "companyStreetClass";
  companyStreetDiv.append(companyStreetLabel, companyStreetInput);

  const companyNumberDiv = document.createElement("div");
  companyNumberDiv.className = "companyNumberClass";
  companyNumberDiv.append(companyNumberLabel, companyNumberInput);

  const companyDistrictDiv = document.createElement("div");
  companyDistrictDiv.className = "companyDistrictClass";
  companyDistrictDiv.append(companyDistrictLabel, companyDistrictInput);

  const companyZipCodeDiv = document.createElement("div");
  companyZipCodeDiv.className = "companyZipCodeClass";
  companyZipCodeDiv.append(companyZipCodeLabel, companyZipCodeInput);

  const companyCityDiv = document.createElement("div");
  companyCityDiv.className = "companyCityClass";
  companyCityDiv.append(companyCityLabel, companyCityInput);

  const companyStateDiv = document.createElement("div");
  companyStateDiv.className = "companyStateClass";
  companyStateDiv.append(companyStateLabel, companyStateInput);

  const companyEmailDiv = document.createElement("div");
  companyEmailDiv.className = "companyEmailClass";
  companyEmailDiv.append(companyEmailLabel, companyEmailInput);

  const companyPhoneDiv = document.createElement("div");
  companyPhoneDiv.className = "companyPhoneClass";
  companyPhoneDiv.append(companyPhoneLabel, companyPhoneInput);

  const companyServiceDiv = document.createElement("div");
  companyServiceDiv.className = "companyServiceClass";
  companyServiceDiv.append(companyServiceLabel, companyServiceInput);

  const companyDescriptionDiv = document.createElement("div");
  companyDescriptionDiv.className = "companyDescriptionClass";
  companyDescriptionDiv.append(companyDescription);

  // appending the divs

  form.append(
    fullCompanyNameDiv,
    cnpjDiv,
    companyStreetDiv,
    companyNumberDiv,
    companyDistrictDiv,
    companyZipCodeDiv,
    companyCityDiv,
    companyStateDiv,
    companyEmailDiv,
    companyPhoneDiv,
    companyServiceDiv,
    companyDescriptionDiv
  );
  registerOption = 2; // gave the 2 (company) option to know what is the type os register
});

const registeredPersons = []; // array of registered persons
const registeredCompanys = []; // array of the registered companys
const submitBtn = document.getElementById("submitBtn"); // the submit button

// creating the th (table)
function tableHeader(text, id, className) {
  const th = document.createElement("th");
  th.innerText = text;
  th.id = id;
  th.className = className;
  return th;
}

// creating the td (table)
function tableDescription(text, id, className) {
  const td = document.createElement("td");
  td.innerText = text;
  td.id = id;
  td.className = className;
  return td;
}

// event when you click on the submit button
submitBtn.addEventListener("click", function (ev) {
  ev.preventDefault(); // don't refresh the page

  //if person
  if (registerOption === 1) {
    //creating the object to sort in categories
    const registering = {
      personalData: {},
      address: {},
      contacts: {},
      service: {},
    };

    // taking the values
    registering.personalData.fullname =
      document.getElementById("fullname").value;
    registering.personalData.cpf = document.getElementById("cpf").value;
    registering.personalData.gender = document.getElementById("gender").value;
    registering.personalData.birthDate =
      document.getElementById("birthDate").value;
    registering.address.street = document.getElementById("street").value;
    registering.address.number = document.getElementById("number").value;
    registering.address.district = document.getElementById("district").value;
    registering.address.zipCode = document.getElementById("zipCode").value;
    registering.address.city = document.getElementById("city").value;
    registering.address.state = document.getElementById("state").value;
    registering.contacts.email = document.getElementById("email").value;
    registering.contacts.phone = document.getElementById("phone").value;
    registering.service.serviceName = document.getElementById("service").value;
    registering.service.description =
      document.getElementById("description").value;

    // put all the values in the array
    registeredPersons.push(registering);

    console.log(registeredPersons);

    // taking the registered section in html
    const registeredSection = document.getElementById("registeredSection");

    // creating the table

    const table = document.createElement("table");

    //creating the name of the table
    const tableName = registering.personalData.fullname;
    const tableNameRow = document.createElement("tr");
    const tableNameHeader = document.createElement("th");
    tableNameHeader.innerText = tableName;
    tableNameHeader.id = "tableNameRow";
    tableNameHeader.colSpan = 4;
    tableNameRow.append(tableNameHeader);
    table.append(tableNameRow);

    // creating the columns headers
    const trHeader = document.createElement("tr");
    const trHeaderData = tableHeader("Dados", "dataHeader", "tableHeader");
    const trHeaderAddress = tableHeader(
      "Endereço",
      "addressHeader",
      "tableHeader"
    );
    const trHeaderContacts = tableHeader(
      "Contatos",
      "contactsHeader",
      "tableHeader"
    );
    const trHeaderServices = tableHeader(
      "Serviços",
      "servicesHeader",
      "tableHeader"
    );

    //appending all the headers
    trHeader.append(
      trHeaderData,
      trHeaderAddress,
      trHeaderContacts,
      trHeaderServices
    );

    //creating the 3 rows needed
    const trDescription1 = document.createElement("tr");
    const trDescription2 = document.createElement("tr");
    const trDescription3 = document.createElement("tr");

    //creating the rows content

    const trDescriptionCpf = tableDescription(
      "CPF: " + registering.personalData.cpf,
      "cpfDescription",
      "tableDescription"
    );

    const trDescriptionBirth = tableDescription(
      "Data de Nascimento: " + registering.personalData.birthDate,
      "birthDescription",
      "tableDescription"
    );

    const trDescriptionGender = tableDescription(
      "Sexo: " + registering.personalData.gender,
      "genderDescription",
      "tableDescription"
    );

    const trDescriptionStreet = tableDescription(
      "Rua: " +
        registering.address.street +
        ", " +
        registering.address.number +
        " - " +
        registering.address.district,
      "streetDescription",
      "tableDescription"
    );

    const trDescriptionZipCode = tableDescription(
      "CEP: " + registering.address.zipCode,
      "zipCodeDescription",
      "tableDescription"
    );

    const trDescriptionCity = tableDescription(
      "Cidade: " + registering.address.city + " - " + registering.address.state,
      "cityDescription",
      "tableDescription"
    );

    const trDescriptionEmail = tableDescription(
      "E-mail: " + registering.contacts.email,
      "emailDescription",
      "tableDescription"
    );

    const trDescriptionPhone = tableDescription(
      "Telefone: " + registering.contacts.phone,
      "phoneDescription",
      "tableDescription"
    );

    const trDescriptionService = tableDescription(
      "Serviço: " + registering.service.serviceName,
      "serviceDescription",
      "tableDescription"
    );

    const trDescriptionServiceDescription = tableDescription(
      "Descrição: " + registering.service.description,
      "serviceDescriprionDescription",
      "tableDescription"
    );

    // appending all the rows

    trDescription1.append(
      trDescriptionCpf,
      trDescriptionStreet,
      trDescriptionEmail,
      trDescriptionService
    );

    trDescription2.append(
      trDescriptionBirth,
      trDescriptionZipCode,
      trDescriptionPhone,
      trDescriptionServiceDescription
    );

    trDescription3.append(trDescriptionGender, trDescriptionCity);

    //appending everything in the table

    table.append(trHeader, trDescription1, trDescription2, trDescription3);
    registeredSection.append(table); // append the table in the section

    // counting the register
    howManyRegistered++;
  }

  // if company
  if (registerOption === 2) {
    //creating the object to sort in categories
    const registering = {
      companyData: {},
      address: {},
      contacts: {},
      service: {},
    };

    // taking the values
    registering.companyData.companyName =
      document.getElementById("fullCompanyName").value;
    registering.companyData.cnpj = document.getElementById("cnpj").value;
    registering.address.street = document.getElementById("street").value;
    registering.address.number = document.getElementById("number").value;
    registering.address.district = document.getElementById("district").value;
    registering.address.zipCode = document.getElementById("zipCode").value;
    registering.address.city = document.getElementById("city").value;
    registering.address.state = document.getElementById("state").value;
    registering.contacts.email = document.getElementById("email").value;
    registering.contacts.phone = document.getElementById("phone").value;
    registering.service.serviceName = document.getElementById("service").value;
    registering.service.description =
      document.getElementById("description").value;

    // put all the values in the array
    registeredCompanys.push(registering);

    console.log(registeredCompanys);

    // taking the registered section in html

    const registeredSection = document.getElementById("registeredSection");

    // creating the table

    const table = document.createElement("table");

    //creating the name of the table

    const tableName = registering.companyData.companyName;
    const tableNameRow = document.createElement("tr");
    const tableNameHeader = document.createElement("th");
    tableNameHeader.innerText = tableName;
    tableNameHeader.id = "tableNameRow";
    tableNameHeader.colSpan = 4;
    tableNameRow.append(tableNameHeader);
    table.append(tableNameRow);

    // creating the columns headers

    const trHeader = document.createElement("tr");
    const trHeaderData = tableHeader("Dados", "dataHeader", "tableHeader");
    const trHeaderAddress = tableHeader(
      "Endereço",
      "addressHeader",
      "tableHeader"
    );
    const trHeaderContacts = tableHeader(
      "Contatos",
      "contactsHeader",
      "tableHeader"
    );
    const trHeaderServices = tableHeader(
      "Serviços",
      "servicesHeader",
      "tableHeader"
    );

    //appending all the headers
    trHeader.append(
      trHeaderData,
      trHeaderAddress,
      trHeaderContacts,
      trHeaderServices
    );

    //creating the 3 rows needed
    const trDescription1 = document.createElement("tr");
    const trDescription2 = document.createElement("tr");
    const trDescription3 = document.createElement("tr");

    //creating the rows content

    const trDescriptionCnpj = tableDescription(
      "CNPJ: " + registering.companyData.cnpj,
      "cnpjDescription",
      "tableDescription"
    );

    const whiteRow = tableDescription("", null, null);

    const whiteRow2 = tableDescription("", null, null);

    const trDescriptionStreet = tableDescription(
      "Rua: " +
        registering.address.street +
        ", " +
        registering.address.number +
        " - " +
        registering.address.district,
      "streetDescription",
      "tableDescription"
    );

    const trDescriptionZipCode = tableDescription(
      "CEP: " + registering.address.zipCode,
      "zipCodeDescription",
      "tableDescription"
    );

    const trDescriptionCity = tableDescription(
      "Cidade: " + registering.address.city + " - " + registering.address.state,
      "cityDescription",
      "tableDescription"
    );

    const trDescriptionEmail = tableDescription(
      "E-mail: " + registering.contacts.email,
      "emailDescription",
      "tableDescription"
    );

    const trDescriptionPhone = tableDescription(
      "Telefone: " + registering.contacts.phone,
      "phoneDescription",
      "tableDescription"
    );

    const trDescriptionService = tableDescription(
      "Serviço: " + registering.service.serviceName,
      "serviceDescription",
      "tableDescription"
    );

    const trDescriptionServiceDescription = tableDescription(
      "Descrição: " + registering.service.description,
      "serviceDescriprionDescription",
      "tableDescription"
    );

    // appending all the rows

    trDescription1.append(
      trDescriptionCnpj,
      trDescriptionStreet,
      trDescriptionEmail,
      trDescriptionService
    );

    trDescription2.append(
      whiteRow,
      trDescriptionZipCode,
      trDescriptionPhone,
      trDescriptionServiceDescription
    );

    //appending everything in the table

    trDescription3.append(whiteRow2, trDescriptionCity);

    table.append(trHeader, trDescription1, trDescription2, trDescription3);
    registeredSection.append(table); // append the table in the section

    // counting the register
    howManyRegistered++;
  }
});
