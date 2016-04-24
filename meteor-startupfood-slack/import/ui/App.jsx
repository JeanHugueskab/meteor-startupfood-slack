import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
...some lines skipped...
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
