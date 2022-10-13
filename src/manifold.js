import { m3, vector } from "math";

const { distanceFromLine, norm, findFurthestPoint, sum, diff, normSq, dot } =
  vector;

const prec = 0.005;
const prec2 = 0.05;
export default class Manifold {
  constructor(body1, body2) {
    this.contacts = [];
    this.body1 = body1;
    this.body2 = body2;
    this.warm = 0;
  }
  addContact(contact) {
    let isFarEnough = true;
    const contacts = this.contacts;

    for (let i = 0, n = contacts.length; i < n; i++) {
      const biasA = diff(contacts[i].PA, contact.PA);
      const biasB = diff(contacts[i].PB, contact.PB);
      if (norm(biasA) < prec2 && norm(biasB) < prec2) {
        isFarEnough = false;
        //contact.accI = contacts[i].accI
        contacts[i] = contact;
      }
    }
    if (isFarEnough) {
      contacts.push(contact);
    }
  }
  update() {
    this.warm++;
    let i, j, n;
    const contacts = this.contacts;
    const pos1 = this.body1.collider.pos;
    const pos2 = this.body2.collider.pos;
    for (i = 0, j = 0, n = contacts.length; i < n; i++) {
      const contact = contacts[i];

      const newPA = sum(
        pos1,
        m3.transformPoint(this.body1.collider.Rmatrix, contact.raLocal)
      );
      const newPB = sum(
        pos2,
        m3.transformPoint(this.body2.collider.Rmatrix, contact.rbLocal)
      );
      const raBias = diff(contact.PA, newPA);
      const rbBias = diff(contact.PB, newPB);
      const penDepth = -dot(diff(newPB, newPA), contact.n);

      if (norm(raBias) < prec2 && norm(rbBias) < prec2 && penDepth > 0) {
        //contact.raLocal = m3.transformPoint(this.body1.collider.RmatrixInverse,contact.ra)
        //contact.rbLocal = m3.transformPoint(this.body2.collider.RmatrixInverse,contact.rb)

        contacts[j] = contacts[i];

        j++;
      }
    }

    while (j < contacts.length) {
      contacts.pop();
    }
    if (contacts.length > 2) this.warm++;
    if (contacts.length < 3) this.warm = 0;
    if (contacts.length > 4) {
      let deepest = null;
      let maxDeep = 0;
      for (i = 0, n = contacts.length; i < n; i++) {
        if (normSq(contacts[i].n) >= maxDeep) {
          maxDeep = normSq(contacts[i].n);
          deepest = contacts[i];
        }
      }
      let furthest = null;
      let maxDistance = 0;
      for (i = 0, n = contacts.length; i < n; i++) {
        let dist = normSq(diff(contacts[i].PA, deepest.PA));
        if (dist >= maxDistance) {
          maxDistance = dist;
          furthest = contacts[i];
        }
      }
      let furthest2 = null;
      maxDistance = 0;
      for (i = 0, n = contacts.length; i < n; i++) {
        let dist = distanceFromLine(furthest.PA, deepest.PA, contacts[i].PA);

        if (dist >= maxDistance) {
          maxDistance = dist;
          furthest2 = contacts[i];
        }
      }

      let furthest3 = null;
      maxDistance = 0;

      const oppositeTodiagonal = findFurthestPoint(
        deepest.PA,
        furthest.PA,
        furthest2.PA
      );

      for (i = 0, n = contacts.length; i < n; i++) {
        let dist = normSq(diff(oppositeTodiagonal, contacts[i].PA));

        if (dist >= maxDistance) {
          maxDistance = dist;
          furthest3 = contacts[i];
        }
      }

      contacts[0] = deepest;
      contacts[1] = furthest;
      contacts[2] = furthest2;
      contacts[3] = furthest3;

      while (contacts.length > 4) contacts.pop();
    }
  }
}
