/**
 * Copyright (c) 2013 Azeem Arshad
 * See the file license.txt for copying permission.
 */

var UniqueToneTestData = [
    [false, "REPLACE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACJ0lEQVR4Xu3Za27CMBBF4bCzLr07a0GARGmIHOfhMzMHiX8pDPfLjRP3Mk3Tz/XtC5LARRCIxGMMQVgekyCCwBKAjWNDBIElABvHhggCSwA2jg0RBJYAbBwbIggsAdg4NkQQWAKwcWxIJpCv64/5hv2g6ONsasgN5PYSZb/TYBcQUYAgouyDsltDnuN4+doG0w3yXD/mvl6UfpRDQLx8AUFE6UM5rCGuKVAQm7IO5vCG2BQoiE1pgzmtITYFCmJTlmFOb4hNgYLYlHmYYQ2xKVAQm/IXpqshSxuLbfcS/49yQ/KeCQbEpgBBRIE1xIUeClK5Kag15H2pr7jQo0EqNgUPUg0lBEgllDAgVVBCgVRAEaR3r+egvwsHkr0lq0GO2FjsOdmyPqOEBcnalNAgGVHCg2RDSQGSCSUNSBaUVCAZUNKBREdJCRIZJS1IVJTUIBFR0oNEQykBEgllFQhlY7FnMzIKSimQCCjlQOgoJUHIKGVBqCilQYgo5UFoKII87qEp/6MX5OWhhoAiyNtT5mgUQWYe+0eiCPJhH2YUiiALG2MjUJpBom8sRtmQFKRB6symCBL1tjfaJevMs7qhZM2HhGhI1HCbFV4OHAJSKeC1KJtBDHdt5MvHN4Ps+7V+2qcEBIGdG4IIAksANo4NEQSWAGwcGyIILAHYODZEEFgCsHFsiCCwBGDj2BBBYAnAxrEhgsASgI1jQwSBJQAbx4YIAksANs4v/wKkAdz466AAAAAASUVORK5CYII="],
    [false, "ADDITIVE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACLklEQVR4Xu3aa27CMBBF4bCzLo2ldWctqCAhCsHOy2dmTiT+pWV0P65N3J6mafq5vLwgCZwEgUjcxhCE5TEJIggsAdg4NkQQWAKwcWyIILAEYOPYEEFgCcDGsSGCwBKAjWNDBIElABvHhmQC+TpP0/fl5bVdAqsacgW5XqLAQEQBgoiyDcomS9bjKC5f62AWg9z3j1dvL8pylF1AXL6AIKIsQ9mtIfdxXL76YHYHsSlAEFHaUQ5piMsXFMSmfIY5tCE2BQpiU97DDGmITYGC2JT/MEMbYlM2Apk7WPy8bb2+wyf6v1wWNWQPEJcvIIgosIa4p0BBKjcFtYc8b/cVN3o0SMWm4EGqoYQAqYQSBqQKSiiQCiiCLD3r2ennwoFkb0k3yF7nWL0fuKzPKGFBsjYlNEhGlPAg2VBSgGRCSQOSBSUVSAaUdCDRUVKCREZJCxIVJTVIRJT0INFQSoBEQukCoRws9h5ERvr3olIgEZpSDoSOUhKEjFIWhIpSGoSIUh6EhiLI7Tsx5W/0gjw81BBQBHl6yhyNIsiLx/6RKIK8OYcZhSLIzMHYCJRmkOgHi1EOJAVpkDqyKYJE/dobbck68lPdULLmW0I0JGq4zQoPNw4BqRRwL8pqEMPtjXz+/maQbd/W3/YuAUFgnw1BBIElABvHhggCSwA2jg0RBJYAbBwbIggsAdg4NkQQWAKwcWyIILAEYOPYEEFgCcDGsSGCwBKAjWNDBIElABvnF3vO5AGabPxBAAAAAElFTkSuQmCC"],
    [false, "AVERAGE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACLElEQVR4Xu3Za1LCQBBF4bATl+LSXYo7USmhCjGkJpPHnO4+VPEvQnO/3EwyXqZp+vp5+4IkcBEEInEbQxCWxySIILAEYOPYEEFgCcDGsSGCwBKAjWNDBIElABvHhggCSwA2jg0RBJYAbBwbkgnk7X2aPj9gvyj4OJsacgW5vkTZ7yzYBUQUIIgo+6Ds1pD7OF6+tsF0g9zXj7mvF6Uf5RAQL19AEFH6UA5riGsKFMSmrIM5vCE2BQpiU9pgTmuITYGC2JRlmNMbYlOgIDZlHmZYQ2wKFMSm/IXpasjSxmLbvcT/o9yQ/M0EA2JTgCCiwBriQg8FqdwU1BryvNRXXOjRIBWbggephhICpBJKGJAqKKFAKqAI0rvXc9DfhQPJ3pLVIEdsLPacbFmfUcKCZG1KaJCMKOFBsqGkAMmEkgYkC0oqkAwo6UCio6QEiYySFiQqSmqQiCjpQaKhlACJhLIKhLKx2LMZGQWlFEgElHIgdJSSIGSUsiBUlNIgRJTyIDQUQW730JT/0Qvy8FBDQBHk6SlzNIogM4/9I1EEebEPMwpFkIWNsREozSDRNxajbEgK0iB1ZlMEiXrbG+2SdeZZ3VCy5kNCNCRquM0KDwcOAakU8FqUzSCGuzby5eObQfb9Wj/tVQKCwM4NQQSBJQAbx4YIAksANo4NEQSWAGwcGyIILAHYODZEEFgCsHFsiCCwBGDj2BBBYAnAxrEhgsASgI1jQwSBJQAb5xuLmuQBYmhQOgAAAABJRU5ErkJggg=="],
    [true, "REPLACE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACJklEQVR4Xu3Za1LCQBBF4bAzl+bS2JmKaBUiSU0mjzndffgdoLlfbiYZLu/T9DH5wiRwEQRj8T2IICwPQWAegghCSwA2j2uIILAEYOPYEEFgCcDGsSGCwBKAjWNDBIElABvHhggCSwA2zqaGXL9+zBvsB0UfZzPILQBR9jsNdgERBQgiyj4ouzXkdxwvX9tgukFuC/rcS5R+lENAvHwBQUTpQzmsIa4pUBCbsg7m8IbYFCiITWmDOa0hNgUKYlOWYU5viE2BgtiU1zDDGmJToCA25S9MV0OWNhbb7iX+H+WG5D0TDIhNAYKIAmuICz0UpHJTUGvI81JfcaFHg1RsCh6kGkoIkEooYUCqoIQCqYAiSO9ez0HvCweSvSWrQY7YWOw52bI+o4QFydqU0CAZUcKDZENJAZIJJQ1IFpRUIBlQ0oFER0kJEhklLUhUlNQgEVHSg0RDKQESCWUVCGVjsWczMgpKKZAIKOVA6CglQcgoZUGoKKVBiCjlQWgogvzcQ1P+oxfk4aGGgCLI01PmaBRBXjz2j0QRZGYfZhSKIAsbYyNQmkGibyxG2ZAUpEHqzKYIEvW2N9ol68yzuqFkzYeEaEjUcJsVHg4cAlIp4LUom0EMd23ky8c3g+z7tX7aXAKCwM4NQQSBJQAbx4YIAksANo4NEQSWAGwcGyIILAHYODZEEFgCsHFsiCCwBGDj2BBBYAnAxrEhgsASgI1jQwSBJQAb5xPMvtYBZZs8FQAAAABJRU5ErkJggg=="],
    [true, "ADDITIVE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACLUlEQVR4Xu3aa07DMBBF4XZnLI2lsTNoeUhRaVI7L5+ZOZH4F2B0v1y7MVzfL5fPixcmgasgGIvvQQRheQgC8xBEEFoCsHncQwSBJQAbx4YIAksANo4NEQSWAGwcGyIILAHYODZEEFgCsHE2NeTjdnb/dvvy2i+BzSD3UUSBgYgCBBFlH5RdlqzpKC5f22BWg9w39LlLlPUoh4C4fAFBRFmHclhD/sZx+eqDORzEpgBBRGlHOaUhLl9QEJvyGubUhtgUKIhNmYcZ0hCbAgWxKf9hhjbEpuwEsnSw+Hrben6Hb/Q/uaxqyBEgLl9AEFFgDXFPgYJUbgpqD3nc7itu9GiQik3Bg1RDCQFSCSUMSBWUUCAVUARZe9Zz0PeFA8nekm6Qo86xeh+4rO8oYUGyNiU0SEaU8CDZUFKAZEJJA5IFJRVIBpR0INFRUoJERkkLEhUlNUhElPQg0VBKgERC6QKhHCz2HkRG+veiUiARmlIOhI5SEoSMUhaEilIahIhSHoSGIsjvZ2LK3+gFmbzUEFAEeXjLHI0iyJPX/pEogsycw4xCEWThYGwESjNI9IPFKAeSgjRIndkUQaJ+7I22ZJ35VDeUrPmWEA2JGm6zwuTGISCVAu5F2QxiuL2RL9/fDLLvr/WnzSUgCOzZEEQQWAKwcWyIILAEYOPYEEFgCcDGsSGCwBKAjWNDBIElABvHhggCSwA2jg0RBJYAbBwbIggsAdg4NkQQWAKwcb4ASYoWEFDe0oYAAAAASUVORK5CYII="],
    [true, "AVERAGE", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACKUlEQVR4Xu3Z61HDQAxFYacTSqF0SqETIDxmkhB71uvHHkknvw0o9/PNxuLyOk0fky9MAhdBMBbfgwjC8hAE5iGIILQEYPN4hggCSwA2jg0RBJYAbBwbIggsAdg4NkQQWAKwcWyIILAEYONsasj71+7+5Q32joKPsxnk+v5F2e8u2AVEFCCIKPug7NaQv3H8+NoG0w1yPdDnXqL0oxwC4scXEESUPpTDGuKZAgWxKetgDm+ITYGC2JQ2mNMaYlOgIDZlGeb0htgUKIhNeQ4zrCE2BQpiU+5huhqytFhs+y7x/yoXkj+ZYEBsChBEFFhDPOihIJWbgjpDHo/6igc9GqRiU/Ag1VBCgFRCCQNSBSUUSAUUQXp3PQf9XDiQ7C1ZDXLEYrHnZsv6jBIWJGtTQoNkRAkPkg0lBUgmlDQgWVBSgWRASQcSHSUlSGSUtCBRUVKDRERJDxINpQRIJJRVIJTFYs8yMgpKKZAIKOVA6CglQcgoZUGoKKVBiCjlQWgogvx+h6b8j16Qm4caAoogD0+Zo1EEefLYPxJFkJk9zCgUQRYWYyNQmkGiLxajLCQFaZA6symCRP3aG+0j68y7uqFkzZeEaEjUcJsVbi4cAlIp4LUom0EMd23ky9c3g+z7Z/1tcwkIArs3BBEElgBsHBsiCCwB2Dg2RBBYArBxbIggsARg49gQQWAJwMaxIYLAEoCNY0MEgSUAG8eGCAJLADaODREElgBsnE9daP0BSnniWgAAAABJRU5ErkJggg=="]
];

CanvasTestWithFM("UniqueTone", 6, function(canvas, gl, fm, copier) {
    var triangle = new TriangleProgram();
    triangle.init(gl);

    var main = new DummyMain(canvas);
    var parent = new DummyParent(fm);


    _.each(UniqueToneTestData, function(data, index) {
        var uniquetone = new Webvs.UniqueTone({
            color: "#800000",
            invert: data[0],
            blendMode: data[1],
        });
        uniquetone.init(gl, main, parent);

        fm.setRenderTarget();
        gl.clearColor(0,0,0,1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        triangle.run(fm, null, "#008000", 0, 0);
        uniquetone.update();
        fm.restoreRenderTarget();
        copier.run(null, null, fm.getCurrentTexture());
        equal(canvas.toDataURL(), data[2], "UniqueTone test #"+index);

        uniquetone.destroy();
    });
});
