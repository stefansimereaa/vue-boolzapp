console.log('JS OK');
console.log('VUE OK',Vue);

//Estrapolo il metodo createapp
const { createApp } = Vue;

//Inizializzo l'app Vue
const app = createApp({
    data() {
        return {
            activeChat: 0,
            showMenu1: false,
            newMessage: '',
            filtredContacts: '',
            user: {
                name: 'Nome Utente',
                avatar: '_io'
            },
            contacts: [
                {
                  id: 1,
                  name: 'Michele',
                  avatar: '_1.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 2,
                  name: 'Fabio',
                  avatar: '_2.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 3,
                  name: 'Samuele',
                  avatar: '_3.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 4,
                  name: 'Alessandro B.',
                  avatar: '_4.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 5,
                  name: 'Alessandro L.',
                  avatar: '_5.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 6,
                  name: 'Claudia',
                  avatar: '_5.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 7,
                  name: 'Federico',
                  avatar: '_7.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 8,
                  name: 'Davide',
                  avatar: '_8.png',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                    }
                  ],
                }
              ],
            notificationsActive: false,
        };
    },
    computed: {
        //Funzione per filtrare la ricerca attraverso la search bar per i contatti
        researchContacts() {
          const filtered = this.filtredContacts.toLowerCase();
          this.filteredContacts = this.contacts.map((contact) => {
            if (contact.name.toLowerCase().includes(filtered)) {
              return contact;
            }
            return null;
          }).filter((contact) => contact !== null);
        },
        
        // Funzione per ottenere la data dell'ultimo messaggio
        lastMessageDate() {
          return this.contacts.map((contact) => {
            const lastMessage = contact.messages[contact.messages.length - 1];
            if (lastMessage) {
              return lastMessage.date;
            }
            return '';
          });
        },
        // Funzione per ottenere il testo dell'ultimo messaggio
        lastMessageText() {
          return this.contacts.map((contact) => {
            const lastMessage = contact.messages[contact.messages.length - 1];
            if (lastMessage) {
              return lastMessage.message;
            }
            return '';
          });
        },
    },
    methods: {
        // Funzione per cambiare tipo immagine dei contacts
        getAvatarImagePath(avatar) {
            const imageName = avatar.replace('.png', '.jpg');
            return 'img/avatar' + imageName;
        },

        // Funzione per controllare al click il toggle delle notifiche
        toggleNotificationsActive() {
            this.notificationsActive = !this.notificationsActive;
            setTimeout(() => {
                this.notificationsActive = false;
            }, 1000);
        },

        // Funzione per selezionare la chat dai contatti
        chatSwitch(index) {
          const contactIndex = this.contacts.map(contact => contact.id).indexOf(index);
          this.activeChat = contactIndex;
        },
        
        // Funzione per inviare un nuovo messaggio tramite l input
        sendNewMessage() {
            const activeChat = this.contacts[this.activeChat];
            const newMessage = {
              id: activeChat.messages.length + 1,
              date: new Date().toLocaleString(),
              message: this.newMessage,
              status: 'sent'
            };
        activeChat.messages.push(newMessage);
        this.newMessage = '';

        // Funzione per inviare il messaggio ok dopo 1 secondo
        const currentDate = new Date().toLocaleString();
        setTimeout(() => {
            activeChat.messages.push({
              id: activeChat.messages.length + 1,
              date: currentDate,
              message: 'Ok',
              status: 'received'
            });
          }, 1000);
    }}
});

//Monto nell'elemento HTML "radice"
app.mount('#root');