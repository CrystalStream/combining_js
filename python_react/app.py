import os
from flask import Flask, render_template, request, redirect
from react.render import render_component

DEBUG = True

app = Flask(__name__)
app.debug = DEBUG

@app.route('/')
def index():
    rendered = render_component(
        os.path.join(os.getcwd(), 'static', 'js', 'ToDo.jsx'),
        {
            "todosCount": 4
        },
        to_static_markup=True,
    )

    return render_template('index.html', rendered=rendered)


if __name__ == '__main__':
    app.run()
