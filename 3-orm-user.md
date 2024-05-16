# 3. ORM and User

## Lesdoelen
Aan het einde van deze les heb je:

- Kennis gemaakt met Object-Relational Mapping (ORM).
- Een functionele `User` class in de backend en frontend geschreven.
- Een login / logout functionaliteit geïmplementeerd in de frontend.

## Object-Relational Mapping (ORM)
Object-Relational Mapping (ORM) is een techniek die wordt gebruikt om objecten in een objectgeoriënteerde programmeertaal te koppelen aan relationele databases.  
Het doel van ORM is om de complexiteit van het werken met databases te verminderen en de ontwikkelaar in staat te stellen zich te concentreren op het werken met objecten in plaats van met SQL.

ORM is een belangrijk concept in softwareontwikkeling en wordt vaak gebruikt in webapplicaties om de interactie met databases te vereenvoudigen.

Voorbeelden van ORM-frameworks zijn:
- Hibernate (Java)
- Entity Framework (C#)
- Django ORM (Python)
- Sequelize (Node.js)
- TypeORM (Node.js)

Zoals je ziet zijn de ORMs voor Javascript allemaal Node.js libraries. Dit komt omdat je in de frontend geen directe toegang hebt tot de database. In de frontend werk je met de data die je van de backend krijgt. De backend is verantwoordelijk voor het ophalen en opslaan van data in de database en de toegangscontrole.

## Sequelize & SQLite3
In deze les gaan we gebruik maken van [Sequelize](https://sequelize.org/), een ORM voor Node.js. Sequelize is een krachtige en flexibele ORM die het mogelijk maakt om eenvoudig te werken met databases in Node.js. Sequelize ondersteunt verschillende databases zoals MySQL, PostgreSQL, SQLite en MariaDB.  
In deze les gaan we gebruik maken van SQLite, een lichtgewicht relationele database die geen server nodig heeft en eenvoudig te gebruiken is.

### Installatie
Installeer Sequelize en SQLite3 in je project:

```bash
npm install --save sequelize sqlite3
```

Installeer ook de Command Line Interface (CLI) van Sequelize:

```bash
npm install --save-dev sequelize-cli
```

In de map `app` vindt je een bestand `app/database.js` waarin de configuratie voor de database is opgenomen. Neem deze configuratie door en zorg ervoor dat je deze begrijpt.

### Migrations
Lees het hoofdstuk 'Migrations' in de [Sequelize documentatie](https://sequelize.org/master/manual/migrations.html) door.

Migrations zijn een manier om de database schema's te beheren en te versiebeheren. Met migrations kun je eenvoudig nieuwe tabellen toevoegen, bestaande tabellen wijzigen of verwijderen. Migrations zijn een krachtige tool die je helpt om je database schema's te beheren en te versiebeheren.

In de map `app` vindt je een map `migrations` waarin de migrations voor de database zijn opgenomen. Neem deze migrations door en zorg ervoor dat je deze begrijpt.

Voer de migrations uit met de volgende commando's:

```bash
npx sequelize-cli db:migrate
```

### Model Basics
Lees het hoofdstuk 'Model Basics' in de [Sequelize documentatie](https://sequelize.org/docs/v6/core-concepts/model-basics/) door. 

Het definieren van een model in Sequelize is eenvoudig. Je definieert een model class door `sequelize.define` aan te roepen of een class te maken die `Model` extend en hier `init()` op aan te roepen. Beide methoden zijn geldig en hebben hun eigen voor- en nadelen.

### Opdracht: User model in de backend
Maak een `User` model in de backend (app/models/user.js). Het `User` model moet de volgende eigenschappen hebben:
- `username` (string)
- `email` (string)
- `password` (string)

### Opdracht: User model in de frontend
Maak een `User` class in de frontend (static/models/user.js). De `User` class moet de volgende eigenschappen hebben:
- `username` (string)
- `email` (string)

Implementeer de `User` class zodat deze de gebruiker kan registreren en inloggen. Gebruik de `fetch` API om de backend aan te roepen.

TIP: het inloggen en registreren zijn statitische methodes van de User class. Pas als deze requests succesvol zijn, maak je een nieuwe User object aan.

De register methode kan er als volgt uitzien:

```javascript
static async register(username, email, password) {
    const response = await fetch("/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({register: { username, email, password }}),
    });

    if (response.status !== 200) {
        return null;
    }

    const data = await response.json();
    return new User(data.user);
}
```

### Opdracht: Login / Logout / Register
Implementeer een login / logout / register functionaliteit in de frontend. Gebruik de `User` class om de gebruiker in te loggen en uit te loggen.

De routes voor login / logout / register zijn al geïmplementeerd in de backend (app/routes/auth.js). Neem deze goed door om te begrijpen hoe de login / logout / register functionaliteit werkt.

Gebruik de dialog elementen in de `index.html` om de gebruiker in te loggen en uit te loggen.

## localStorage
`localStorage` is een API die wordt gebruikt om gegevens lokaal op te slaan in de browser. Met `localStorage` kun je gegevens opslaan en ophalen in de browser, zodat je deze gegevens kunt gebruiken om de gebruiker te identificeren en de gebruikerservaring te verbeteren.

Lees het artikel [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) door om meer te leren over `localStorage`.

## Opdracht: Onthouden user state
Implementeer een manier om de user state te onthouden in de frontend. Gebruik hiervoor de `localStorage` API.

### Uitdaging
Het is mogelijk om de user state te onthouden in de frontend, maar hoe zit het als de backend de user state verandert (uitgelogd door server-restart bijvoorbeeld)? Hoe kun je ervoor zorgen dat de frontend altijd up-to-date is met de backend?