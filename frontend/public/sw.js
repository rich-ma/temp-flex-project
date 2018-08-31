self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: `Hey ${data.fname}!`,
    actions: [
      {action: 'addLocation', title: 'Add location'},
      {action: 'close', title: 'Close'},
    ]
  });
});

self.addEventListener('notificationclose', e => {
  console.log("notificationclose fired");
});

self.addEventListener('notificationclick', e => {
  console.log("notificationclick fired");
});