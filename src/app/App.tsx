import {useEffect, useState} from 'react';

import styles from './App.module.scss';

export const App = () => {
  const [weaponFactor, setWeaponFactor] = useState(0);
  const [skillFactor, setSkillFactor] = useState(0);
  const [knowledgeFactor, setKnowledgeFactor] = useState(0);
  const [diceSum, setDiceSum] = useState(0);

  const [armormFactor, setArmorFactor] = useState(0);
  const [skillAgFactor, setSkillAgFactor] = useState(0);
  const [knowledgeArFactor, setKnowledgeArFactor] = useState(0);
  const [diceArSum, setDiceArSum] = useState(0);

  const [damageFinale, setDamageFinale] = useState(0);
  const [armorFinale, setArmorFinale] = useState(0);

  const damageDiceCounter = () => {
    return 1 + skillFactor + knowledgeFactor * 0.5;
  };

  const damage = () => {
    return (weaponFactor * (diceSum / 10)).toFixed(2);
  };

  const armorDiceCounter = () => {
    return 1 + skillAgFactor + knowledgeArFactor * 0.5;
  };

  const armor = () => {
    return (armormFactor * (diceArSum / 10)).toFixed(2);
  };

  useEffect(() => {
    setDamageFinale(weaponFactor * (diceSum / 10));
    setArmorFinale(armormFactor * (diceArSum / 10));
  }, [weaponFactor, diceSum, armormFactor, diceArSum]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.formuls}>
          <div>
            <div>
              Множ. оружия Ат
              <input
                type="number"
                value={weaponFactor === 0 ? '' : weaponFactor}
                onChange={(e) => {
                  setWeaponFactor(+e.target.value);
                }}
              />
            </div>
            <div>
              Мод. навыка атаки Ат
              <input
                type="number"
                value={skillFactor === 0 ? '' : skillFactor}
                onChange={(e) => {
                  setSkillFactor(+e.target.value);
                }}
              />
            </div>
            <div>
              Знание атаки Ат
              <input
                type="number"
                value={knowledgeFactor === 0 ? '' : knowledgeFactor}
                onChange={(e) => {
                  setKnowledgeFactor(+e.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.action}>Для урона нужно бросить {damageDiceCounter()} куб(а/ов)</div>
          <div>
            Сумма кубов{' '}
            <input
              type="number"
              value={diceSum === 0 ? '' : diceSum}
              onChange={(e) => {
                setDiceSum(+e.target.value);
              }}
            />
          </div>
          <div>Урон равен {damage()}</div>
        </div>
        <div className={styles.formuls}>
          <div>
            <div>
              Множ. брони Защ
              <input
                type="number"
                value={armormFactor === 0 ? '' : armormFactor}
                onChange={(e) => {
                  setArmorFactor(+e.target.value);
                }}
              />
            </div>
            <div>
              Мод. ловкости/навыка Защ
              <input
                type="number"
                value={skillAgFactor === 0 ? '' : skillAgFactor}
                onChange={(e) => {
                  setSkillAgFactor(+e.target.value);
                }}
              />
            </div>
            <div>
              Знание защиты Защ
              <input
                type="number"
                value={knowledgeArFactor === 0 ? '' : knowledgeArFactor}
                onChange={(e) => {
                  setKnowledgeArFactor(+e.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.action}>Для защиты нужно бросить {armorDiceCounter()} куб(а/ов)</div>
          <div>
            Сумма кубов{' '}
            <input
              type="number"
              value={diceArSum === 0 ? '' : diceArSum}
              onChange={(e) => {
                setDiceArSum(+e.target.value);
              }}
            />
          </div>
          <div>Защита равна {armor()}</div>
        </div>
      </div>
      <div className={styles.finale}>Итоговый урон = {(damageFinale - armorFinale).toFixed(2)}</div>
    </div>
  );
};
