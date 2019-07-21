class Fighter {

constructor(data) {
   this.name = data.name;
   this.damage = data.damage;
   this.hp = data.hp;
   this.agility = data.agility;
   this.health = data.hp;
   this.wins = 0;
   this.loses = 0;
}

getName() {
   return this.name; 
}

getDamage() { 
   return this.damage;
}

getAgility() { 
   return this.agility;

}

getHealth() { 
   return this.health;
}

attack(enemy) { 
   const maxAgility = 100;
   let successProbality = enemy.getAgility() / maxAgility;
   if (Math.random() >= successProbality) { 
      enemy.dealDamage(this.damage);
      console.log(this.name + ' make ' + this.damage + ' damage to ' + enemy.getName());
    } else {
      console.log(this.name + ' attack missed');
   }
}

logCombatHistory() { 
   console.log('Name:' + this.name + ', Wins: ' + this.wins + ', Losses: '+ this.loses);
}

heal(healPoints) { 
   this.health = Math.min(this.hp, this.health + healPoints);
}

dealDamage(damagePoints) { 
    this.health = Math.max(0, this.health - damagePoints);

}

addWin() { 
   this.wins++;
}

addLoss() { 
   this.loses++;
}
}

function isDead(fighter) {
    if (fighter.getHealth() === 0) {
	console.log(fighter.getName() + ' is dead and can\'t fight');
        return true;
    }
    return false;
}

function battle(fighter1, fighter2) {

  do {
      if (isDead(fighter1) || isDead(fighter2)) { 
         break; 
       }
      fighter1.attack(fighter2);	
      if (isDead(fighter2)) {
        fighter1.addWin();
        fighter2.addLoss();
        break;
      }

      fighter2.attack(fighter1);	
      if (isDead(fighter1)) {
         fighter1.addLoss();
         fighter2.addWin();
        break;
      }

   } while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0) 
}

const fighter1 = new Fighter({name:'John',damage:20, agility:25, hp:100});
const fighter2 = new Fighter({name:'Jim',damage:2, agility:99, hp:30});

battle(fighter1, fighter2);

fighter1.logCombatHistory();
fighter2.logCombatHistory();

