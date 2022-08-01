const userprofileform = {
    name: 'app.userprofileform',
    component: "Form",
    schema: {
      component: 'Form',
      fields: [
        {
          name: 'store',
          component: 'Field',
        },
      ],
    },
    fields: [
    {
      component: 'CollectionField',
      name : 'userprofile',
      label: 'User',
      hideLabel: true,
      // forbidCreate: true,
      // forbidUpdate: true,
      // forbidDelete: true,
      // forbidViewArchived: true,
    //   forbidSearch: true,
      // forbidSort: true,
    //  forbidOrder: false,
      formFactory: {
        component: 'Factory',
        product: {
          component: 'Form',
            fields: [
              {
                name: "userName",
                label: "First Last Name",
                required: true,
                fullWidth: false,
                block: true,
                minLength: "5",
                maxLength: "100",
                component: "TextField"
              },
              {
                name: "email",
                label: "Email",
                required: true,
                fullWidth: false,
                useDisplayValue: false,
                component: "EmailField"
              },
              {
                name: "phone",
                label: "Phone Number",
                required: true,
                component: "PhoneField"
              },
              {
                name: "city",
                label: "City",
                required: true,
                component: "CityField"
              },
            ],
            listeners: [
              {
                event: 'load',
                actions: [
                  {
                    // Default the id to '1' so that we can edit the doc later. Usually, this id would come
                    // from the route or the user's session
                    component: 'Set',
                    name: 'fields.phone.value',
                    value: '123456789',
                  },
                ],
              },
            ],
          },
        },
        store: '{{store}}',
      },
    ],
  };

export default userprofileform;