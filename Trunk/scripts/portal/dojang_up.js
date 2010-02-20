/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
 * @author:   Moogra
 * @function: Warp character up and award player with dojo points
 * @maps:     All Dojo fighting maps
*/
/*
importPackage(net.sf.odinms.tools);

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300216) != null) {
        pi.getClient().getSession().write(MaplePacketCreator.dojoWarpUp());
        pi.getPlayer().message("You received " + pi.getPlayer().addDojoPointsByMap() + " training points. Your total training points score is now " + pi.getPlayer().getDojoPoints() + ".");
        var stage = (pi.getPlayer().getMapId() / 100) % 100;
        var charcount = pi.getClient().getChannelServer().getMapFactory().getMap(pi.getPlayer().getMapId() + 100).getCharacters().size();
      //  if (stage - (stage / 6) | 0 == pi.getPlayer().getVanquisherStage() && charcount < 2) // we can also try 5 * stage / 6 | 0 + 1
       //     pi.getPlayer().setVanquisherKills(pi.getPlayer().getVanquisherKills() + 1);
        if (stage != 38)
            if (charcount < 1)
                pi.getClient().getChannelServer().getMapFactory().getMap(pi.getPlayer().getMapId() + 100).killAllMonsters();
        return true;
    } else {
        pi.getPlayer().dropMessage("There are still some monsters remaining.");
    }
    return false;
}*/

function enter(pi) {
    return pi.dojang_up();
}