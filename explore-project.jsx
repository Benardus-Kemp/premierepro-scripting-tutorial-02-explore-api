#target premierepro

(function () {
    try {
        // 1) Get the active project
        if (!app.project) {
            alert("No project found. Please open a project in Premiere first.");
            return;
        }

        // Show project name or path
        var projectName = app.project.path ? app.project.path : app.project.name;
        alert("Active Project: " + projectName);

        // 2) Explore the root bins
        var numBins = app.project.rootItem.children.numItems;
        alert("The project has " + numBins + " top-level items (bins, clips, sequences).");

        // 3) Loop through items and show basic info
        for (var i = 0; i < numBins; i++) {
            var item = app.project.rootItem.children[i];
            alert("Item " + (i+1) + ": " + item.name + " (" + item.type + ")");
        }

        // 4) Sequences overview
        var seqCount = app.project.sequences.numSequences;
        if (seqCount > 0) {
            alert("There are " + seqCount + " sequence(s) in this project.");
            var activeSeq = app.project.activeSequence;
            if (activeSeq) {
                alert("Active Sequence: " + activeSeq.name);
            }
        } else {
            alert("No sequences found in this project.");
        }

    } catch (e) {
        alert("Error: " + e);
    }
})();
