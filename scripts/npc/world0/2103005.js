var status;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if(mode == 1)
    {
        status++;
    }
    else
    {
        cm.dispose();
        return;
    }
    if (status == 0) 
    {
        if(cm.isQuestStarted(3929))
        {
            cm.forceCompleteQuest(3929);
            cm.sendOk("The quest has been completed!");
            cm.dispose();
        }
        else
        {
            cm.dispose();
            return;
        }
    }
}