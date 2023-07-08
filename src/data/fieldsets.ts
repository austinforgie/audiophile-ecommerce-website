const fieldsets = [
  {
    legend: "Billing Details",
    fields: [
      {
        label: "Name",
        id: "name-input",
        type: "text",
        name: "name",
        placeholder: "Alexei Ward",
      },
      {
        label: "Email Address",
        id: "email-input",
        type: "email",
        name: "email",
        placeholder: "alexei@mail.com",
      },
      {
        label: "Phone Number",
        id: "phone-number-input",
        type: "text",
        name: "phoneNumber",
        placeholder: "+1 202-555-0136",
      },
    ],
  },
  {
    legend: "Shipping Info",
    fields: [
      {
        label: "Your Address",
        id: "address-input",
        type: "text",
        name: "address",
        placeholder: "1137 Williams Avenue",
      },
      {
        label: "Zip Code",
        id: "zip-code-input",
        type: "text",
        name: "zipCode",
        placeholder: "10001",
      },
      {
        label: "City",
        id: "city-input",
        type: "text",
        name: "city",
        placeholder: "New York",
      },
      {
        label: "Country",
        id: "country-input",
        type: "text",
        name: "country",
        placeholder: "United States",
      },
    ],
  },
  {
    legend: "Payment Details",
    fields: [
      {
        type: "radioGroup",
        heading: "Payment Method",
        fields: [
          {
            label: "e-Money",
            id: "e-money-input",
            type: "radio",
            name: "payment",
            value: "e-money",
            checked: true,
          },
          {
            label: "Cash on Delivery",
            id: "cash-delivery-input",
            type: "radio",
            name: "payment",
            value: "cash-on-delivery",
            checked: false,
          },
        ],
      },
      {
        label: "e-Money Number",
        id: "e-money-number-input",
        type: "text",
        name: "eMoneyNumber",
        placeholder: "238521993",
      },
      {
        label: "e-Money PIN",
        id: "e-money-pin-input",
        type: "text",
        name: "eMoneyPIN",
        placeholder: "6891",
      },
    ],
  },
];

export default fieldsets;
